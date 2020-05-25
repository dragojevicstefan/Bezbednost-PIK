package com.example.bezbednost.model;


import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Certificate {

    @Id
    private String serialNumber;

    @Column
    private CertificateType type;

    @Column
    private boolean valid;

    @Column
    private String subjectCommonName;

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public CertificateType getType() {
        return type;
    }

    public void setType(CertificateType type) {
        this.type = type;
    }

    public boolean isValid() {
        return valid;
    }

    public void setValid(boolean valid) {
        this.valid = valid;
    }

    public String getSubjectCommonName() {
        return subjectCommonName;
    }

    public void setSubjectCommonName(String subjectCommonName) {
        this.subjectCommonName = subjectCommonName;
    }
}
