package com.github.aelkz.backend.app.controller;

import com.github.aelkz.backend.app.model.Product;
import com.github.aelkz.backend.app.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(method = RequestMethod.POST)
    public Map<String, Object> createProduct(@RequestBody Map<String, Object> productMap){
        Product product = new Product(
            productMap.get("name").toString(),
            productMap.get("description").toString(),
            productMap.get("unitValue").toString(),
            productMap.get("serialNumber").toString(),
            productMap.get("acquisitionDate").toString(),
            productMap.get("category").toString(),
            productMap.get("subCategory").toString(),
            Integer.parseInt(productMap.get("status").toString()),
            productMap.get("vendorMail").toString(),
            productMap.get("vendorPhone").toString()
        );

        productRepository.save(product);
        Map<String, Object> response = new LinkedHashMap<String, Object>();
        response.put("message", "Product successfully created");
        response.put("product", product);
        return response;
    }

    @RequestMapping(method = RequestMethod.GET, value="/{productId}")
    public Product getProductDetails(@PathVariable("productId") String productId){
        return productRepository.findOne(productId);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/{productId}")
    public Map<String, Object> editProduct(@PathVariable("productId") String productId,
                                        @RequestBody Map<String, Object> productMap){
        Product product = new Product(
            productMap.get("name").toString(),
            productMap.get("description").toString(),
            productMap.get("unitValue").toString(),
            productMap.get("serialNumber").toString(),
            productMap.get("acquisitionDate").toString(),
            productMap.get("category").toString(),
            productMap.get("subCategory").toString(),
            Integer.parseInt(productMap.get("status").toString()),
            productMap.get("vendorMail").toString(),
            productMap.get("vendorPhone").toString()
        );
        product.setId(productId);

        Map<String, Object> response = new LinkedHashMap<String, Object>();
        response.put("message", "Product successfully updated.");
        response.put("product", productRepository.save(product));
        return response;
    }

    @RequestMapping(method = RequestMethod.DELETE, value="/{productId}")
    public Map<String, String> deleteProduct(@PathVariable("productId") String productId){
        productRepository.delete(productId);
        Map<String, String> response = new HashMap<String, String>();
        response.put("message", "Product successfully deleted.");
        return response;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Map<String, Object> getAllProducts(){
        List<Product> products = productRepository.findAll();
        Map<String, Object> response = new LinkedHashMap<String, Object>();
        response.put("totalProducts", products.size());
        response.put("products", products);
        return response;
    }

}
