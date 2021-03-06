package com.codecool.tuttifrutti.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "recipes")
@Builder
public class Recipe {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;

    @Lob
    @Type(type = "org.hibernate.type.TextType")
    @Column(nullable = false)
    private String preparation;

    @Column(nullable = false, name = "image_url")
    private String imageUrl;

    @Column(nullable = false)
    private String difficulty;

    @Column(nullable = false, name = "total_likes")
    private int totalLikes = 0;

    @OneToMany(mappedBy = "recipe", cascade = CascadeType.ALL)
    @Column(nullable = false, name = "ingredient")
    @LazyCollection(LazyCollectionOption.TRUE)
    @Singular
    @ToString.Exclude
    @JsonManagedReference
    private Collection<Ingredient> ingredients = new ArrayList<>();

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonBackReference
    private User user;

    @Column(nullable = false, name = "creation_date")
    private LocalDate creationDate;

    @Column(nullable = false, name = "preparation_time")
    private int preparationTime;

    @Enumerated(EnumType.STRING)
    @ElementCollection(targetClass = Category.class)
    @LazyCollection(LazyCollectionOption.FALSE)
    @Column(nullable = false)
    @ToString.Exclude
    private List<Category> categories = new ArrayList<>();


    public void addIngredient(Ingredient ingredient) {
        this.ingredients = new ArrayList<>(this.ingredients);
        this.ingredients.add(ingredient);
    }

    public void addCategory(Category category) {
        this.categories.add(category);
    }

    public void increaseTotalLiked() {
        this.totalLikes++;
    }

    public void decreaseTotalLiked() {
        this.totalLikes--;
    }

}
