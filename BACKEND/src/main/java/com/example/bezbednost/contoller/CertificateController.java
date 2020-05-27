package com.example.bezbednost.contoller;


import com.example.bezbednost.dto.CertificateDto;
import com.example.bezbednost.dto.IssuerDto;
import com.example.bezbednost.dto.SubjectDto;
import com.example.bezbednost.service.*;
import org.bouncycastle.operator.OperatorCreationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.bezbednost.model.Certificate;

import java.io.IOException;
import java.security.*;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin(origins = "https://localhost:4200")
@RequestMapping("/certificate")
public class CertificateController {

    @Autowired
    private  CertificateGeneratorService CGservice;
    @Autowired
    private  CertificateService certificateService;
    @Autowired
    private  KeystoreService keystoreService;
    @Autowired
    private  KeyService keyService;
    @Autowired
    private  OcspService ocspService;

    @PostMapping
    public void generateCertificate(@RequestBody SubjectDto subjectDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException, OperatorCreationException, NoSuchProviderException, InvalidAlgorithmParameterException, UnrecoverableKeyException {
            //sacuva u bazi podataka sertifikat zajedno sa njegovim tipom
            subjectDto.setAlias(keyService.getSerialNumber().toString());
            subjectDto.setSerialNumber(subjectDto.getAlias());
            CGservice.saveCertificateDB(subjectDto);


            IssuerDto issuerDto = new IssuerDto();
           subjectDto.setX500Name(certificateService.getX500NameSubject(subjectDto));
            KeyPair keyPair=keyService.generateKeyPair();
            subjectDto.setPublicKey(keyPair.getPublic());
            subjectDto.setPrivateKey(keyPair.getPrivate());

            //zasto da mi vraca sertifikate?
          //  keystoreService.getCertificates(keyService.getKeyStorePass());
              certificateService.createCertificate(subjectDto,issuerDto);



    }


    @PostMapping("/selfSigned/generate")
    public void generateSelfSignedCertificate(@RequestBody SubjectDto subjectDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException, OperatorCreationException, NoSuchProviderException, InvalidAlgorithmParameterException, UnrecoverableKeyException {

        subjectDto.setType("ROOT");
        System.out.println(keyService.getSerialNumber().toString());
        subjectDto.setAlias(keyService.getSerialNumber().toString());
        subjectDto.setSerialNumber(subjectDto.getAlias());
        CGservice.saveCertificateDB(subjectDto);

        IssuerDto issuerDto = new IssuerDto();

        subjectDto.setX500Name(certificateService.getX500NameSubject(subjectDto));
        KeyPair pair =keyService.generateKeyPair();
        subjectDto.setPublicKey(pair.getPublic());
        subjectDto.setPrivateKey(pair.getPrivate());
        issuerDto.setX500Name(subjectDto.getX500Name());
        issuerDto.setPrivateKey(pair.getPrivate());


        certificateService.createCertificate(subjectDto,issuerDto);
    }


    //da mi vrati sve root i intermediate
    @GetMapping("/allPossibleIssuers")
    public ResponseEntity<ArrayList<Certificate>> getPossibleIssuers() {

        return new ResponseEntity<>(CGservice.getAllCertificates(),HttpStatus.OK);
    }

    //za ispis tabele
    @GetMapping("/allCertificates")
    public ResponseEntity<List<CertificateDto>> getCertificates() throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {

        List<CertificateDto> listaSertifikata = new ArrayList<>();
        List<X509Certificate> allCert = new ArrayList<>();

        allCert=keystoreService.getCertificates(keyService.getKeyStorePass());

        for(X509Certificate cert: allCert){
            listaSertifikata.add(new CertificateDto(cert));
        }
            return new ResponseEntity<>(listaSertifikata, HttpStatus.OK);
    }

    @PostMapping("/revoke")
    public void revokeCertificate(@RequestBody CertificateDto certificateDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {
        ocspService.revoke(certificateDto);
    }
    @PostMapping("/check")
    public void checkStatus(@RequestBody CertificateDto certificateDto){
        ocspService.check(certificateDto.getSerialNumber());
    }
    @PostMapping("/download")
    public ResponseEntity<Void> download(@RequestBody CertificateDto certificateDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {
        certificateService.download(certificateDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
