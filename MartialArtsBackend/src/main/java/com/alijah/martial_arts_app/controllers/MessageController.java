package com.alijah.martial_arts_app.controllers;

import java.sql.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alijah.martial_arts_app.models.Message;
import com.alijah.martial_arts_app.repositories.MessageRepository;

//This class handles the Message models on the /api/message endpoint, returning JSON.
@RestController
@RequestMapping(path="/api/message")
public class MessageController 
{
	Logger logger = LoggerFactory.getLogger(MessageController.class);
	//The below allows me to use the queries defined in the MessageRepository interface.
	@Autowired
	private MessageRepository msgRepo;
	
	//The below method gets all the messages sent by the specified user, at the path specified in the GetMapping annotation.
	@GetMapping(path="/sent/{username}")
	List<Message> getSentMessages(@PathVariable String username) { return msgRepo.findByUsername(username); }
	
	//The below method gets all the messages received from the specified user, at the path specified in the GetMapping annotation.
	@GetMapping(path="/received/{username}")
	List<Message> getReceivedMessages(@PathVariable String username) { return msgRepo.findByRecipient(username); }
	
	//The below method posts a message, adding the date it was created as a property.
	@PostMapping
	ResponseEntity<Message> addMessage(@RequestBody Message m)
	{
		logger.info("Message added.");
		m.setDatePosted(new Date(System.currentTimeMillis()));
		return ResponseEntity.ok(msgRepo.save(m));
	}
}