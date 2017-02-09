package com.github.aelkz.backend.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application {
    /*
     * remeber to bootstrap your mongoDB instance.
     * https://www.mongodb.com/download-center#community
     * https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
     * https://docs.mongodb.com/manual/tutorial/manage-mongodb-processes/
     *
     * $ mongod.exe
     */
    public static void main(String[] args) throws Exception {
        SpringApplication.run(new Object[] { Application.class }, args);
    }

}
