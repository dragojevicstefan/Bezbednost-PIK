package com.example.bezbednost.repository;


import com.example.bezbednost.model.Certificate;
import com.example.bezbednost.model.CertificateType;
import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface CertificateRepo extends JpaRepositoryImplementation <Certificate,String> {

    Collection<Certificate> findAllByTypeAndValid(CertificateType ct, boolean b);
    Certificate findBySerialNumber(String serial);
}
