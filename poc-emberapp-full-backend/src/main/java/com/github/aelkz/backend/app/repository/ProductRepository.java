package com.github.aelkz.backend.app.repository;

import com.github.aelkz.backend.app.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product,String> {
}
