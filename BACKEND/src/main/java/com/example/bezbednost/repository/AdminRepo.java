package com.example.bezbednost.repository;

import com.example.bezbednost.model.Admin;

public interface AdminRepo {
    Admin findByUsername(String username);
}
