package com.example.bezbednost.service;


import com.example.bezbednost.dto.CertificateDto;
import com.example.bezbednost.model.CertificateType;
import com.example.bezbednost.model.RevocationCertificate;
import com.example.bezbednost.repository.CertificateRepo;
import com.example.bezbednost.repository.RevocationRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.Certificate;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.List;

@Service
public class OcspService  {

    @Autowired
    private RevocationRepo revocationRepository;
    @Autowired
    private  KeystoreService keystoreService;
    @Autowired
    private  KeyService keyService;
  @Autowired
    private CertificateRepo certificateRepository;


    public void revoke(CertificateDto certificateDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {
        KeyStore keyStore=keystoreService.getKeyStore(keyService.getKeyStorePath(),keyService.getKeyStorePass());
        com.example.bezbednost.model.Certificate certificate=certificateRepository.findBySerialNumber(certificateDto.getSerialNumber());
        CertificateType certificateType=certificate.getType();
        List<RevocationCertificate> revokedList=new ArrayList<>();
        if (revocationRepository.findBySerial(certificateDto.getSerialNumber()) != null) {
            throw new CertificateException("Certificate is already revoked");
        }
        if(certificateType.equals(CertificateType.CLIENT)){
            RevocationCertificate revocationCertificate=new RevocationCertificate();
            revocationCertificate.setSerial(certificate.getSerialNumber());
            revokedList.add(revocationCertificate);
            com.example.bezbednost.model.Certificate certificate1 =certificateRepository.findBySerialNumber(certificate.getSerialNumber());
            certificate1.setValid(false);
            certificateRepository.save(certificate1);
        }
        else{
            X509Certificate x509Certificate= (X509Certificate) keyStore.getCertificate(certificateDto.getSerialNumber());
            revokeChildren(x509Certificate);
            RevocationCertificate revocationCertificate=new RevocationCertificate();
            revocationCertificate.setSerial(certificate.getSerialNumber());
            revokedList.add(revocationCertificate);
        }

        revocationRepository.saveAll(revokedList);
    }


    public void check(String serialNumber) {
        if(revocationRepository.findBySerial(serialNumber).isValid());
    }


    public void revokeChildren(Certificate certificate) throws KeyStoreException, CertificateException, NoSuchAlgorithmException, IOException {
        KeyStore keyStore=keystoreService.getKeyStore(keyService.getKeyStorePath(),keyService.getKeyStorePass());
        Enumeration<String> aliases=keyStore.aliases();
        while (aliases.hasMoreElements()){
            String alias=aliases.nextElement();
            Certificate[] certificates=keyStore.getCertificateChain(alias);
            List<Certificate>certificateList=new ArrayList<>(Arrays.asList(certificates));
            if(certificateList.contains(certificate)){
                for(Certificate cert:certificateList){
                    X509Certificate x509Certificate=(X509Certificate)cert;
                    String serial=x509Certificate.getSerialNumber().toString();
                    if(cert.equals(certificate)){
                        break;
                    }
                    if (revocationRepository.findBySerial(serial) == null) {
                        RevocationCertificate revocationCertificate=new RevocationCertificate();
                        revocationCertificate.setSerial(((X509Certificate) cert).getSerialNumber().toString());
                        revocationRepository.save(revocationCertificate);
                    }

                }
            }
        }
    }
}
