package com.github.aelkz.backend.app.model;

import org.springframework.data.annotation.Id;

public class Product {

    @Id
    private String id;
    private String name;
    private String description;
    private String unitValue;
    private String serialNumber;
    private String acquisitionDate;
    private String category;
    private String subCategory;
    private int status;
    private String vendorMail;
    private String vendorPhone;

    public Product() {}

    public Product(String name, String description, String unitValue, String serialNumber, String acquisitionDate, String category, String subCategory, int status, String vendorMail, String vendorPhone) {
        this.name = name;
        this.description = description;
        this.unitValue = unitValue;
        this.serialNumber = serialNumber;
        this.acquisitionDate = acquisitionDate;
        this.category = category;
        this.subCategory = subCategory;
        this.status = status;
        this.vendorMail = vendorMail;
        this.vendorPhone = vendorPhone;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getUnitValue() {
        return unitValue;
    }

    public void setUnitValue(String unitValue) {
        this.unitValue = unitValue;
    }

    public String getSerialNumber() {
        return serialNumber;
    }

    public void setSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
    }

    public String getAcquisitionDate() {
        return acquisitionDate;
    }

    public void setAcquisitionDate(String acquisitionDate) {
        this.acquisitionDate = acquisitionDate;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(String subCategory) {
        this.subCategory = subCategory;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getVendorMail() {
        return vendorMail;
    }

    public void setVendorMail(String vendorMail) {
        this.vendorMail = vendorMail;
    }

    public String getVendorPhone() {
        return vendorPhone;
    }

    public void setVendorPhone(String vendorPhone) {
        this.vendorPhone = vendorPhone;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Product)) return false;

        Product product = (Product) o;

        if (!getId().equals(product.getId())) return false;
        if (!getName().equals(product.getName())) return false;
        if (!getDescription().equals(product.getDescription())) return false;
        return getSerialNumber().equals(product.getSerialNumber());
    }

    @Override
    public int hashCode() {
        int result = getId().hashCode();
        result = 31 * result + getName().hashCode();
        result = 31 * result + getDescription().hashCode();
        result = 31 * result + getSerialNumber().hashCode();
        return result;
    }
}
