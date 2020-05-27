package com.example.bezbednost.service;

import com.example.bezbednost.dto.SubjectDto;
import com.example.bezbednost.model.Certificate;
import com.example.bezbednost.model.CertificateType;
import com.example.bezbednost.model.IssuerData;
import com.example.bezbednost.model.SubjectData;
import com.example.bezbednost.repository.CertificateRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.cert.X509Certificate;
import java.util.ArrayList;

@Service
public class CertificateGeneratorService {

    @Autowired
    CertificateRepo repository;


    public void saveCertificateDB(SubjectDto subjectData) {

        CertificateType cerType;
        if (subjectData.getType().equals("ROOT")) {
            cerType = CertificateType.ROOT;
        } else if (subjectData.getType().equals("INTERMEDIATE")) {
            cerType = CertificateType.INTERMEDIATE;
        } else {
            cerType = CertificateType.CLIENT;
        }

        if (subjectData.getStartDate().compareTo(subjectData.getEndDate()) < 0) {
            Certificate certificate = new Certificate();
            certificate.setSerialNumber(subjectData.getSerialNumber());
            certificate.setType(cerType);
            certificate.setValid(true);
            certificate.setSubjectCommonName(subjectData.getName()+subjectData.getSurname()+"organizacija:"+subjectData.getOrganization());

            repository.save(certificate);
        }
    }


    public ArrayList<Certificate> getAllCertificates() {

        ArrayList<Certificate> sertifikati = new ArrayList();

        sertifikati.addAll(repository.findAllByTypeAndValid(CertificateType.ROOT,true));
        for(Certificate cert : repository.findAllByTypeAndValid(CertificateType.INTERMEDIATE,true)) {
            sertifikati.add(cert);
        }
        return sertifikati;
    }


}
