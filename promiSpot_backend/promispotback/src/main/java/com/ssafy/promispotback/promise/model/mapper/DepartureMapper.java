package com.ssafy.promispotback.promise.model.mapper;

import com.ssafy.promispotback.promise.model.entity.DepartureEntity;
import com.ssafy.promispotback.promise.model.entity.PromiseDataEntity;
import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.sql.SQLException;
import java.util.List;

@Mapper
public interface DepartureMapper {

    // 회원별 출발장소 저장
    public int insertDeparture(DepartureEntity departureEntity) throws SQLException;

    // 약속별 회원별 출발장소 조회
    public DepartureEntity getDeparture(
            @Param("promiseSeq") int promiseSeq,
            @Param("memberSeq") int memberSeq) throws SQLException;

    // 약속별 전체 회원의 출발장소 조회
    public List<DepartureEntity> getDepartureList(int promiseSeq) throws SQLException;

    // 회원별 출발장소 변경
    public int modifyDeparture(DepartureEntity departureEntity) throws SQLException;

    // 회원별 출발장소 삭제
    public int removeDeparture(
            @Param("promiseSeq") int promiseSeq,
            @Param("memberSeq") int memberSeq) throws SQLException;







}
