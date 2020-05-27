package com.example.bezbednost.service;


import com.example.bezbednost.dto.CertificateDto;
import com.example.bezbednost.dto.DtoUtils;
import com.example.bezbednost.dto.IssuerDto;
import com.example.bezbednost.dto.SubjectDto;
import com.example.bezbednost.model.SubjectData;
import lombok.RequiredArgsConstructor;
import org.apache.tomcat.util.codec.binary.Base64;
import org.bouncycastle.asn1.x500.X500Name;
import org.bouncycastle.asn1.x500.X500NameBuilder;
import org.bouncycastle.asn1.x500.style.BCStyle;
import org.bouncycastle.cert.X509CertificateHolder;
import org.bouncycastle.cert.X509v3CertificateBuilder;
import org.bouncycastle.cert.jcajce.JcaX509CertificateConverter;
import org.bouncycastle.cert.jcajce.JcaX509CertificateHolder;
import org.bouncycastle.cert.jcajce.JcaX509v3CertificateBuilder;
import org.bouncycastle.jce.provider.BouncyCastleProvider;
import org.bouncycastle.operator.ContentSigner;
import org.bouncycastle.operator.OperatorCreationException;
import org.bouncycastle.operator.jcajce.JcaContentSignerBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileOutputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.security.*;
import java.security.cert.Certificate;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CertificateService{
    @Autowired
    private  KeystoreService keystoreService;
    @Autowired
    private  KeyService keyService;
    @Autowired
    private ValidationService validationService;

    public X509Certificate generateCertificate(SubjectDto subjectDto, IssuerDto issuerDto) throws OperatorCreationException, NoSuchAlgorithmException, CertificateException, IOException, KeyStoreException, UnrecoverableKeyException {
        JcaContentSignerBuilder builder=new JcaContentSignerBuilder("SHA256withECDSA");
        Security.addProvider(new BouncyCastleProvider());
        builder=builder.setProvider("BC");
        KeyStore keyStore=keystoreService.getKeyStore(keyService.getKeyStorePath(),keyService.getKeyStorePass());
        PrivateKey privKey = null;
        X500Name issuer=null;
        if(subjectDto.getPrivateKey().equals(issuerDto.getPrivateKey())){
            issuer=subjectDto.getX500Name();
            privKey=subjectDto.getPrivateKey();
        }
        else {
            X509Certificate issuerCert= (X509Certificate) keyStore.getCertificate(subjectDto.getIssuerSerialNumber());
            issuer=new JcaX509CertificateHolder(issuerCert).getSubject();
            privKey = (PrivateKey) keyStore.getKey(subjectDto.getIssuerSerialNumber(), "key".toCharArray());
            boolean valid=validationService.validate(subjectDto.getIssuerSerialNumber());
        }

        ContentSigner contentSigner=builder.build(privKey);
        BigInteger serialNumber=new BigInteger(subjectDto.getAlias());
        X509v3CertificateBuilder certificateBuilder=new JcaX509v3CertificateBuilder(issuer,serialNumber,
                subjectDto.getStartDate(),subjectDto.getEndDate(),subjectDto.getX500Name(),subjectDto.getPublicKey());
        System.out.println(issuer+"  "+serialNumber+"  "+subjectDto.getStartDate()+"  "+subjectDto.getEndDate()+"  "+subjectDto.getX500Name()+"  "+subjectDto.getPublicKey());
        X509CertificateHolder certHolder  = certificateBuilder.build(contentSigner);
        JcaX509CertificateConverter certConverter = new JcaX509CertificateConverter();
        BouncyCastleProvider bcp = new BouncyCastleProvider();
        certConverter = certConverter.setProvider(bcp);
        return certConverter.getCertificate(certHolder);
    }


    public void createCertificate(SubjectDto subjectDto, IssuerDto issuerDto) throws CertificateException, NoSuchAlgorithmException, OperatorCreationException, IOException, KeyStoreException, UnrecoverableKeyException {
        X509Certificate certificate=generateCertificate(subjectDto,issuerDto);
        String keyPass="key";
        KeyStore keyStore=keystoreService.getKeyStore(keyService.getKeyStorePath(),keyService.getKeyStorePass());
        if(subjectDto.getPrivateKey().equals(issuerDto.getPrivateKey())){

        }
        else {
            boolean valid=validationService.validate(subjectDto.getIssuerSerialNumber());
        }
        keystoreService.store(keyService.getKeyStorePass(),keyPass,new Certificate[]{certificate},subjectDto.getPrivateKey(), subjectDto.getAlias(),keyService.getKeyStorePath());

    }



    public X500Name getX500NameSubject(SubjectDto subjectDto)  {
        SubjectData subject = (SubjectData) new DtoUtils().convertToEntity(new SubjectData(),subjectDto);
        X500NameBuilder builder=new X500NameBuilder(BCStyle.INSTANCE);
        String comonname = subject.getName() + subject.getSurname();
        builder.addRDN(BCStyle.CN,comonname);
        builder.addRDN(BCStyle.O, subject.getOrganization());
        builder.addRDN(BCStyle.C,subject.getCountry());
        builder.addRDN(BCStyle.OU,subject.getOrganizationUnit());
        builder.addRDN(BCStyle.E,subject.getEmail());
        builder.addRDN(BCStyle.NAME,subject.getName());
        builder.addRDN(BCStyle.GIVENNAME,subject.getSurname());
        return builder.build();
    }



    public void download(CertificateDto certificateDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {
        KeyStore keyStore=keystoreService.getKeyStore(keyService.getKeyStorePath(),keyService.getKeyStorePass());
        X509Certificate certificate= (X509Certificate) keyStore.getCertificate(certificateDto.getSerialNumber());


        FileOutputStream os = new FileOutputStream(certificateDto.getSerialNumber() + ".crt");
        os.write("-----BEGIN CERTIFICATE-----\n".getBytes("US-ASCII"));
        os.write(Base64.encodeBase64(certificate.getEncoded(), true));
        os.write("-----END CERTIFICATE-----\n".getBytes("US-ASCII"));
        os.close();
    }


}
