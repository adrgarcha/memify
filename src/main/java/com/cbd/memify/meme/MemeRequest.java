package com.cbd.memify.meme;

import lombok.Data;

@Data
public class MemeRequest {

    private String name;
    private String templateName;
    private String upperText;
    private String lowerText;

}
