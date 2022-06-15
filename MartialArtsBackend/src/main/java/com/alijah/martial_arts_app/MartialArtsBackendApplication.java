package com.alijah.martial_arts_app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class MartialArtsBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(MartialArtsBackendApplication.class, args);
	}

	//The below allows my front-end application, hosted on port 3000, to send all CRUD operations to the back-end.
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/api/**").allowedOrigins("http://localhost:3000").allowedMethods("GET", "POST","PUT", "DELETE");
				//registry.addMapping("/api/**").allowedOrigins("http://ec2-3-228-9-95.compute-1.amazonaws.com:3000").allowedMethods("GET", "POST","PUT", "DELETE");
			}
		};
	}
}