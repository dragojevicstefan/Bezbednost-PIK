package com.example.bezbednost.repository;

import com.example.bezbednost.model.Admin;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminRepo extends JpaRepository<Admin,Long> {
    Admin findByUsername(String username);
    Page<Admin> findAll(Pageable pageable);
    List<Admin> findAllByUsername(String username);
}
