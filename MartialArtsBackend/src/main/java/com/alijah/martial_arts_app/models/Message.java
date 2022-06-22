package com.alijah.martial_arts_app.models;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


//The below is a Message Entity. This maps this Message class name and properties to the SQL Message table and columns.
@Entity
@Table(name = "Message")
public class Message {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String username;
	private Date datePosted;
	private String contents;
	private String recipient;
	
	public Message() {
		
	}
	
	public Message(String username, String contents, String recipient)
	{
		this.username = username;
		this.contents = contents;
		this.recipient = recipient;
	}

	public int getId() {return id;}
	public void setId(int id) {this.id = id;}
	
	public String getUsername() {return username;}
	public void setUsername(String username) {this.username = username;}
	
	public Date getDatePosted() {return datePosted;}
	public void setDatePosted(Date datePosted) {this.datePosted = datePosted;}
	
	public String getContents() {return contents;}
	public void setContents(String contents) {this.contents = contents;}
	
	public String getRecipient() {return recipient;}
	public void setRecipient(String recipient) {this.recipient = recipient;}
	
}