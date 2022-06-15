package com.alijah.martial_arts_app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.alijah.martial_arts_app.models.TechniqueResponse;
import com.alijah.martial_arts_app.models.User;

//This interface is for specifying the queries to be used on the user table. Users have a String as their ID.
public interface UserRepository extends CrudRepository<User, String>
{
	User findByUsernameAndPassword(String username, String password);
	//The below query uses the TechniqueResponse object to hold the customized columns from a join.
	@Query("SELECT new com.alijah.martial_arts_app.models.TechniqueResponse(f.id, f.creator, f.name, f.type, f.description, f.video, COUNT(f.id) AS fav_count) FROM User u JOIN u.favorites f GROUP BY f.id ORDER BY f.name, fav_count DESC")
	List<TechniqueResponse> findPopular();
	User findByFirstNameAndLastName(String firstName, String lastName);
}