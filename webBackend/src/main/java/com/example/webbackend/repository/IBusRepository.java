package com.example.webbackend.repository;

import com.example.webbackend.model.bus.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


@Transactional
public interface IBusRepository extends JpaRepository<Bus, Integer> {

    @Query(value = "select b.* from `bus` b join `category` c on b.category_id = c.id", nativeQuery = true)
    Page<Bus> getPageAll(Pageable pageable);


    @Query(value = "select b.* from `bus` b join `category` c on b.category_id = c.id where b.id = :id", nativeQuery = true)
    Bus findById(@Param("id") int id);

    @Modifying
    @Query(value = "delete from `bus` where id = :id", nativeQuery = true)
    void deleteById(@Param("id") int id);

    @Modifying
    @Query(value = "update bus set numberCar = :numberCar, nameBus = :nameBus," +
            " localFrom = :localFrom, localEnd = :localEnd, numberPhone = :numberPhone," +
            "emai = :email,timeOut = :timeOut,timeIn = :timeIn, category_id = :categoryId " +
            "where id = :id", nativeQuery = true)
    void update(@Param("numberCar") int numberCar, @Param("nameBus") String nameBus,
                @Param("localFrom") String localFrom, @Param("localEnd") String localEnd,
                @Param("numberPhone") int numberPhone, @Param("email") String email,
                @Param("timeOut") String timeOut, @Param("timeIn") String timeIn, @Param("categoryId") int categoryId, @Param("id") int id);

    @Modifying
    @Query(value = "INSERT INTO bus (numberCar,nameBus,localFrom,localEnd,numberPhone," +
            "email,timeOut,timeIn,category_id) VALUES " +
            "(:numberCar, :nameBus,:localFrom,:localEnd,:numberPhone,:email,:timeOut," +
            ":timeIn,:categoryId); ", nativeQuery = true)
    void add(@Param("numberCar") int numberCar, @Param("nameBus") String nameBus,
             @Param("localFrom") String localFrom, @Param("localEnd") String localEnd,
             @Param("numberPhone") int numberPhone, @Param("email") String email, @Param("timeOut") String timeOut,
             @Param("timeIn") String timeIn, @Param("categoryId") int categoryId);
}

