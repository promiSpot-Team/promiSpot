package com.ssafy.promispotback.mongdb;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;


@Getter
@Setter
@Document(collection = "user")
public class MongoDBTestModel {

    private String id;
    private String name;
    private int age;

    public MongoDBTestModel() {
    }

    public MongoDBTestModel(String id, String name, int age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
