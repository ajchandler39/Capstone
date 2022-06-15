package com.alijah.martial_arts_app.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

//The below is a User Entity. This maps this User class name and properties to the SQL User table and columns.
@Entity
public class User {
	
	@Id
	private String username;
	private String password;
	private String firstName;
	private String lastName;
	private String email;
	
	//Many users have many favorites. Accessing the below returns an array, list, of this users favorites.
	@ManyToMany(cascade=CascadeType.ALL)
	private List<Technique> favorites;
	
	//One user has many techniques. Accessing the below returns an array, list, of this users techniques.
	//Specifying the join column prevents Hibernate from creating a join table, and instead uses the technique column "creator".
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="creator")
	private List<Technique> techs;
	
	//One user has many messages. Accessing the below returns an array, list, of this users messages.
	//Specifying the join column prevents Hibernate from creating a join table, and instead uses the message column "username", as in username of the sender.
	@OneToMany(cascade=CascadeType.ALL)
	@JoinColumn(name="username")
	private List<Message> sentMessages;
	
	//One user has many messages. Accessing the below returns an array, list, of this users messages.
	//Specifying the join column prevents Hibernate from creating a join table, and instead uses the message column "recipient".
	@OneToMany
	@JoinColumn(name="recipient")
	private List<Message> receivedMessages;

	public User() {}
	
	public User(String username, String password, String firstName, String lastName, String email) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.favorites = new ArrayList<Technique>();
		this.techs = new ArrayList<Technique>();
		this.sentMessages = new ArrayList<Message>();
		this.receivedMessages = new ArrayList<Message>();
	}

	public User(String username, String password, String firstName, String lastName, String email,
			List<Technique> favorites, List<Technique> techs, List<Message> sentMessages, List<Message> receivedMessages) {
		super();
		this.username = username;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.favorites = favorites;
		this.techs = techs;
		this.sentMessages = sentMessages;
		this.receivedMessages = receivedMessages;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public List<Technique> getFavorites() {
		return favorites;
	}

	public void setFavorites(List<Technique> favorites) {
		this.favorites = favorites;
	}

	public List<Technique> getTechs() {
		return techs;
	}

	public void setTechs(List<Technique> techs) {
		this.techs = techs;
	}

	public List<Message> getSentMessages() {
		return sentMessages;
	}

	public void setSentMessages(List<Message> sentMessages) {
		this.sentMessages = sentMessages;
	}

	public List<Message> getReceivedMessages() {
		return receivedMessages;
	}

	public void setReceivedMessages(List<Message> receivedMessages) {
		this.receivedMessages = receivedMessages;
	}
	
	
}