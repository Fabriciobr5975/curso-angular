package com.fabricio.crud_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;

import com.fabricio.crud_spring.enums.Category;
import com.fabricio.crud_spring.model.Course;
import com.fabricio.crud_spring.model.Lesson;
import com.fabricio.crud_spring.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	@Profile("dev")
	CommandLineRunner initDataBase(final CourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			for (int i = 1; i <= 20; i++) {
				Course course = new Course();
				course.setName("Angular com Spring " + i);
				course.setCategory(Category.FRONT_END);

				Lesson lesson = new Lesson();
				lesson.setName("Introdução");
				lesson.setYoutubeUrl("01234567891");
				lesson.setCourse(course);
				course.getLessons().add(lesson);

				Lesson lesson2 = new Lesson();
				lesson2.setName("Angular");
				lesson2.setYoutubeUrl("01234567891");
				lesson2.setCourse(course);
				course.getLessons().add(lesson2);

				courseRepository.save(course);
			}
		};
	}
}
