package com.alijah.martial_arts_app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alijah.martial_arts_app.models.Message;

//This interface is for specifying the queries to be used on the message table. Messages have an integer as their ID.
public interface MessageRepository extends JpaRepository<Message, Integer>{

	List<Message> findByUsername(String username);
	List<Message> findByRecipient(String username);
}
