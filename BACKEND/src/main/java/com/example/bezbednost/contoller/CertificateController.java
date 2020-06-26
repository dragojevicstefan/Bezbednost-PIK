package com.example.bezbednost.contoller;


import com.example.bezbednost.dto.CertificateDto;
import com.example.bezbednost.dto.IssuerDto;
import com.example.bezbednost.dto.SubjectDto;
import com.example.bezbednost.model.User;
import com.example.bezbednost.service.*;
import org.bouncycastle.operator.OperatorCreationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.example.bezbednost.model.Certificate;

import java.io.IOException;
import java.security.*;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.List;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CertificateController {

    @Autowired
    private CertificateGeneratorService CGservice;
    @Autowired
    private CertificateService certificateService;
    @Autowired
    private KeystoreService keystoreService;
    @Autowired
    private KeyService keyService;
    @Autowired
    private OcspService ocspService;
    @Autowired
    private UserService userService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/api/certificate/generate")
    public void generateCertificate(@RequestBody SubjectDto subjectDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException, OperatorCreationException, NoSuchProviderException, InvalidAlgorithmParameterException, UnrecoverableKeyException {

        //sacuva u bazi podataka sertifikat zajedno sa njegovim tipom
        subjectDto.setAlias(keyService.getSerialNumber().toString());
        subjectDto.setSerialNumber(subjectDto.getAlias());
        CGservice.saveCertificateDB(subjectDto);


        IssuerDto issuerDto = new IssuerDto();
        subjectDto.setX500Name(certificateService.getX500NameSubject(subjectDto));
        KeyPair keyPair = keyService.generateKeyPair();
        subjectDto.setPublicKey(keyPair.getPublic());
        subjectDto.setPrivateKey(keyPair.getPrivate());

        //zasto da mi vraca sertifikate?
        //  keystoreService.getCertificates(keyService.getKeyStorePass());
        certificateService.createCertificate(subjectDto, issuerDto);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/api/certificate/selfSigned/generate")
    public void generateSelfSignedCertificate(@RequestBody SubjectDto subjectDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException, OperatorCreationException, NoSuchProviderException, InvalidAlgorithmParameterException, UnrecoverableKeyException {
    //    if(subjectDto.getStartDate().)
        subjectDto.setType("ROOT");
        System.out.println(keyService.getSerialNumber().toString());
        subjectDto.setAlias(keyService.getSerialNumber().toString());
        subjectDto.setSerialNumber(subjectDto.getAlias());
        CGservice.saveCertificateDB(subjectDto);

        IssuerDto issuerDto = new IssuerDto();

        subjectDto.setX500Name(certificateService.getX500NameSubject(subjectDto));
        KeyPair pair = keyService.generateKeyPair();
        subjectDto.setPublicKey(pair.getPublic());
        subjectDto.setPrivateKey(pair.getPrivate());
        issuerDto.setX500Name(subjectDto.getX500Name());
        issuerDto.setPrivateKey(pair.getPrivate());


        certificateService.createCertificate(subjectDto, issuerDto);

    }


    //da mi vrati sve root i intermediate
    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/api/certificate//allPossibleIssuers")
    public ResponseEntity<ArrayList<Certificate>> getPossibleIssuers() {
        return new ResponseEntity<>(CGservice.getAllCertificates(), HttpStatus.OK);
    }

    //za ispis tabele
    @GetMapping("/api/certificate/allCertificates")
    public ResponseEntity<List<CertificateDto>> getCertificates() throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {

        List<CertificateDto> listaSertifikata = new ArrayList<>();
        List<X509Certificate> allCert = new ArrayList<>();

        allCert = keystoreService.getCertificates(keyService.getKeyStorePass());

        for (X509Certificate cert : allCert) {
            listaSertifikata.add(new CertificateDto(cert));
        }
        return new ResponseEntity<>(listaSertifikata, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/api/certificate//revoke")
    public void revokeCertificate(@RequestBody CertificateDto certificateDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {
        ocspService.revoke(certificateDto);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/api/certificate//check")
    public ResponseEntity<String> checkStatus(@RequestBody CertificateDto certificateDto) {
        int i=ocspService.check(certificateDto.getSerialNumber());
        if(i==0){
            return new ResponseEntity<>("Nije pronadjen", HttpStatus.NO_CONTENT);
        }else if(i==1){
            return new ResponseEntity<>("Certificate is not revoked", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Certificate is revoked", HttpStatus.OK);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/api/certificate//download")
    public ResponseEntity<Void> download(@RequestBody CertificateDto certificateDto) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {
        certificateService.download(certificateDto);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
