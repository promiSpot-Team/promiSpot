package com.ssafy.promispotback.promise.controller;

import com.ssafy.promispotback.promise.model.entity.DepartureEntity;
import com.ssafy.promispotback.promise.model.entity.PromiseDataEntity;
import com.ssafy.promispotback.promise.model.entity.PromiseEntity;
import com.ssafy.promispotback.promise.model.service.DepartureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/departure")
public class DepartureController {

    @Autowired
    DepartureService departureService;

    // 약속별 회원의 출발 장소 저장
    // 이미 저장되 있다면 수정 진행
    @PostMapping("/insert")
    public ResponseEntity<?> insertDeparture(@RequestBody DepartureEntity departureEntity) {
        try {

            int result = 0;

            // 이미 선택되어 있는지 판단
            if(departureService.getDeparture(departureEntity.getPromiseSeq(), departureEntity.getMemberSeq()) == null) {
                // 선택되어 있지 않다면 저장
                result = departureService.insertDeparture(departureEntity);
            } else {
                // 선택되어 있다면 변경
                result = departureService.modifyDeparture(departureEntity);
            }

            if(result != 0) { // 생성 완료 시
                return new ResponseEntity<String>("success", HttpStatus.OK);
            } else { // 생성 실패

                return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
            }

        } catch (Exception e) {
            e.printStackTrace();
            return exceptionHandling(e);
        }
    }

    // 약속별 회원별 출발 장소 조회
    @GetMapping("get/{promiseSeq}/{memberSeq}")
    public ResponseEntity<?> getDeparture(@PathVariable("promiseSeq") int promiseSeq,
                                          @PathVariable("memberSeq") int memberSeq) {
        try {
            DepartureEntity departure = departureService.getDeparture(promiseSeq, memberSeq);

            if (departure != null) {
                System.out.println("success work");
                return new ResponseEntity<DepartureEntity>(departure, HttpStatus.OK);
            } else {
                System.out.println("fail work");
                return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return exceptionHandling(e);
        }
    }

    // 약속별 회원들의 출발 장소 전체 조회
    @GetMapping("getList/{promiseSeq}")
    public ResponseEntity<?> getDepartureList(@PathVariable("promiseSeq") int promiseSeq) {
        try {

            List<DepartureEntity> departureList = departureService.getDepartureList(promiseSeq);

            if (departureList != null) {
                System.out.println("success work");
                return new ResponseEntity<List<DepartureEntity>>(departureList, HttpStatus.OK);
            } else {
                System.out.println("fail work");
                return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return exceptionHandling(e);
        }
    }

    // 약속별 회원의 출발 장소 변경
    @PutMapping("modify")
    public ResponseEntity<?> modifyDeparture(@RequestBody DepartureEntity departureEntity) {

        try {
            int result = departureService.modifyDeparture(departureEntity);
            if (result != 0) {
                return new ResponseEntity<String>("success", HttpStatus.OK);
            } else {
                return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return exceptionHandling(e);
        }
    }

    // 약속별 회원의 출발 장소 삭제
    @DeleteMapping("remove/{promiseSeq}/{memberSeq}")
    public ResponseEntity<?> removePromise(@PathVariable("promiseSeq") int promiseSeq,
                                           @PathVariable("memberSeq") int memberSeq) {

        try {
            int result = departureService.removeDeparture(promiseSeq, memberSeq);
            if (result != 0) {
                return new ResponseEntity<String>("success", HttpStatus.OK);
            } else {
                return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return exceptionHandling(e);
        }
    }







    // 에러 처리
    private ResponseEntity<String> exceptionHandling(Exception e) {
        return new ResponseEntity<String>("Error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
