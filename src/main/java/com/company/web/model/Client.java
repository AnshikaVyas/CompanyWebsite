package com.company.web.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "clients")
@Data
public class Client {

    @Id
    private String id;
    private String name;
    private String designation;
    private String description;
    private String imageUrl;
}
