package com.example.bezbednost.repository;

import com.example.bezbednost.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepo extends JpaRepository<User,Long> {
    User findByUsername(String username);
    List<User> findAll();
}
