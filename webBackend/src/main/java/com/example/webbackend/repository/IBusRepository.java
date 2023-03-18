package com.example.webbackend.repository;

import com.example.webbackend.model.bus.Bus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public interface IBusRepository extends JpaRepository<Bus,Integer> {

    @Query(value = "select b.* from `bus` b join `category` c on b.category_id = c.id",nativeQuery = true)
    Page<Bus> getPageAll(Pageable pageable);

    @Query(value = "select b.* from `bus` b where b.nameBus like concat('%',:nameBus,'%')",nativeQuery = true)
    Page<Bus> searchByName(@Param("nameBus") String nameBus,Pageable pageable);
}
