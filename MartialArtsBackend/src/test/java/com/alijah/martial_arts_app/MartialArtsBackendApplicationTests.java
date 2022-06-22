package com.alijah.martial_arts_app;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.alijah.martial_arts_app.models.Message;
import com.alijah.martial_arts_app.models.Technique;
import com.alijah.martial_arts_app.models.User;
import com.alijah.martial_arts_app.repositories.MessageRepository;
import com.alijah.martial_arts_app.repositories.TechniqueRepository;
import com.alijah.martial_arts_app.repositories.UserRepository;


@SpringBootTest
class MartialArtsBackendApplicationTests {
	
	@Autowired
	UserRepository userRepo;
	@Autowired
	TechniqueRepository techRepo;
	@Autowired
	MessageRepository msgRepo;
	
	
	@Test
	void contextLoads() {
	}
	
	@Test
	void findUserByUsernameAndPassword()
	{
		User user = new User("TestUser", "TestPass", "First", "Last", "TestEmail@gmail.com");
		userRepo.save(user);
		User foundUser = userRepo.findByUsernameAndPassword("TestUser", "TestPass");
		Assert.assertEquals(user.getFirstName(), foundUser.getFirstName());
		userRepo.delete(user);
	}
	
	@Test
	void findUserByFirstAndLast()
	{
		User user = new User("TestUser", "TestPass", "First", "Last", "TestEmail@gmail.com");
		userRepo.save(user);
		User foundUser = userRepo.findByFirstNameAndLastName("First", "Last");
		Assert.assertEquals(user.getUsername(), foundUser.getUsername());
		userRepo.delete(user);
	}
	
	@Test
	void findLatestTechniques()
	{
		User user = new User("TestUser", "TestPass", "First", "Last", "TestEmail@gmail.com");
		
		user.getTechs().add(new Technique("TestUser", "TestName1", "TestType1", "TestDesc1", new byte[5]));
		user.getTechs().add(new Technique("TestUser", "TestName2", "TestType2", "TestDesc2", new byte[5]));
		userRepo.save(user);
		
		List<Technique> latest = techRepo.findLatest();
		
		for(int i = 0; i < 2; i++)
		{
			Assert.assertEquals(user.getTechs().get(1 - i).getName(), latest.get(i).getName());
			techRepo.delete(latest.get(i));
		}

		userRepo.delete(user);
	}
	
	@Test
	void findMessageByUsername()
	{
		User user = new User("TestUser1", "TestPass1", "First1", "Last1", "TestEmail1@gmail.com");
		User receivingUser = new User("TestUser2", "TestPass2", "First2", "Last2", "TestEmail2@gmail.com");
		user.getSentMessages().add(new Message(user.getUsername(), "Test contents.", receivingUser.getUsername()));
		userRepo.save(receivingUser);
		userRepo.save(user);
		
		Message foundMsg = msgRepo.findByUsername(user.getUsername()).get(0);
		
		Assert.assertEquals(user.getSentMessages().get(0).getUsername(), foundMsg.getUsername());
		msgRepo.delete(foundMsg);
		userRepo.delete(user);
		userRepo.delete(receivingUser);
	}
	
	@Test
	void findMessageByRecipient()
	{
		User user = new User("TestUser1", "TestPass1", "First1", "Last1", "TestEmail1@gmail.com");
		User receivingUser = new User("TestUser2", "TestPass2", "First2", "Last2", "TestEmail2@gmail.com");
		user.getSentMessages().add(new Message(user.getUsername(), "Test contents.", receivingUser.getUsername()));
		userRepo.save(receivingUser);
		userRepo.save(user);
		
		Message foundMsg = msgRepo.findByRecipient(receivingUser.getUsername()).get(0);
		
		Assert.assertEquals(user.getSentMessages().get(0).getUsername(), foundMsg.getUsername());
		msgRepo.delete(foundMsg);
		userRepo.delete(user);
		userRepo.delete(receivingUser);
	}
}