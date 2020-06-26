package com.example.bezbednost.repository;


import com.example.bezbednost.model.RevocationCertificate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RevocationRepo extends JpaRepository<RevocationCertificate,Long> {
    RevocationCertificate findBySerial(String serial);
}
