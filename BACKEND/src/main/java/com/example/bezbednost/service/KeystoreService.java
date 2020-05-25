package com.example.bezbednost.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.cert.Certificate;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;


@Service
@RequiredArgsConstructor
public class KeystoreService  {

    @Autowired
    private  KeyService keyService;


    public void store(String keyStorePassword, String keyPassword, Certificate[] chain, PrivateKey privateKey, String alias,String keyStorePath) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {
        char[] keyStorePasswordChars=keyStorePassword.toCharArray();
        char[] keyPasswordChars=keyPassword.toCharArray();

        // znaci get Key store pokusava da pronadje keyStore na zadatoj putanji,ako ga ne pronadje kreira novi
        KeyStore keyStore=getKeyStore(keyStorePath,keyStorePassword);
        KeyStore.PrivateKeyEntry privKeyEntry = new KeyStore.PrivateKeyEntry(privateKey,
                chain);
        keyStore.setEntry(alias, privKeyEntry, new KeyStore.PasswordProtection(keyPasswordChars));
        keyStore.store(new FileOutputStream(keyStorePath),keyStorePasswordChars);
    }


    public KeyStore getKeyStore(String keyStorePath, String keyStorePassword) throws IOException, KeyStoreException, CertificateException, NoSuchAlgorithmException {
        char[] keyStorePasswordChars=keyStorePassword.toCharArray();
        KeyStore keyStore=KeyStore.getInstance("PKCS12");
        try{
            keyStore.load(new FileInputStream(keyStorePath),keyStorePasswordChars);
        }catch (FileNotFoundException e){
            keyStore.load(null,keyStorePasswordChars);
        }
        return keyStore;
    }

    public List<X509Certificate> getCertificates(String keyStorePass) throws CertificateException, NoSuchAlgorithmException, KeyStoreException, IOException {
        String keyStorePath=keyService.getKeyStorePath();
        KeyStore keyStore=getKeyStore(keyStorePath,keyStorePass);
        List<X509Certificate>certificateList=new ArrayList<>();
        Enumeration<String> aliass= keyStore.aliases();

        while(aliass.hasMoreElements()){
            String alias=aliass.nextElement();
            X509Certificate certificate=(X509Certificate)keyStore.getCertificate(alias);
            certificateList.add(certificate);
        }
        return certificateList;
    }

}
