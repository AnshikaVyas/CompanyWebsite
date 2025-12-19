package com.company.web.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "contacts")
@Data
public class Contact {

    @Id
    private String id;
    private String fullName;
    private String email;
    private String mobile;
    private String city;
}
