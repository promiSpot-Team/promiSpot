package com.ssafy.promispotback.promise.model.service;

import com.ssafy.promispotback.promise.model.entity.DepartureEntity;
import com.ssafy.promispotback.promise.model.mapper.DepartureMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class DepartureServiceImpl implements DepartureService{

    // mapper 자동 주입
    @Autowired
    DepartureMapper departureMapper;

    // 약속별 회원의 출발 장소 저장
    @Override
    public int insertDeparture(DepartureEntity departureEntity) throws SQLException {
        return departureMapper.insertDeparture(departureEntity);
    }

    // 약속별 회원별 출발 장소 조회
    @Override
    public DepartureEntity getDeparture(int promiseSeq, int memberSeq) throws SQLException {
        return departureMapper.getDeparture(promiseSeq, memberSeq);
    }

    // 약속별 회원의 출발 장소 전체 조회
    @Override
    public List<DepartureEntity> getDepartureList(int promiseSeq) throws SQLException {
        return departureMapper.getDepartureList(promiseSeq);
    }

    // 약속별 회원의 출발 장소 변경
    @Override
    public int modifyDeparture(DepartureEntity departureEntity) throws SQLException {
        return departureMapper.modifyDeparture(departureEntity);
    }

    // 약속별 회원의 출발 장소 삭제
    @Override
    public int removeDeparture(int promiseSeq, int memberSeq) throws SQLException {
        return departureMapper.removeDeparture(promiseSeq, memberSeq);
    }




}
