package com.example.bezbednost.repository;

import com.example.bezbednost.model.ConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConfirmationTokenRepo extends JpaRepository<ConfirmationToken, String> {
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
