package com.alijah.martial_arts_app.models;

import java.util.Arrays;

import javax.persistence.Lob;

//The below is a special kind of class that doesn't link to a table, but allows me to convert the results of a custom query to an object.
public class TechniqueResponse 
{
	
	private Integer id;
	private String creator;
	private String name;
	private String type;
	private String description;
	@Lob
	private byte[] video;
	long n;
	
	public TechniqueResponse(String name)
	{
		this.name = name;
	}
	
	public TechniqueResponse(Integer techid, String creator, String name, String type, String description, byte[] video) {
		super();
		this.id = techid;
		this.creator = creator;
		this.name = name;
		this.type = type;
		this.video = video;
		this.description = description;
	}
	
	public TechniqueResponse(Integer techid, String creator, String name, String type, String description, byte[] video, long n) {
		super();
		this.id = techid;
		this.creator = creator;
		this.name = name;
		this.type = type;
		this.video = video;
		this.description = description;
		this.n = n;
	}

	public Integer getId() { return id; }
	public String getCreator() { return creator; }
	public String getName() { return name; }
	public String getType() { return type; }
	public byte[] getVideo() { return video; }
	public String getDescription() { return description; }
	public long getN() { return n; }

	public void setId(Integer id) { this.id = id; }
	public void setName(String name) { this.name = name; }
	public void setType(String type) { this.type = type; }
	public void setVideo(byte[] video) { this.video = video; }
	public void setN(Long n) { this.n = n; }

	@Override
	public String toString() {
		return "TechniqueResponse [id=" + id + ", username=" + creator + ", name=" + name + ", type=" + type
				+ ", video=" + Arrays.toString(video) + ", description=" + description + ", n=" + n + "]";
	}


	
	
}
