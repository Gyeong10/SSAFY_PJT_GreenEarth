package com.ssafy.greenEarth.controller;

import com.ssafy.greenEarth.domain.Mission;
import com.ssafy.greenEarth.domain.Role;
import com.ssafy.greenEarth.dto.*;
import com.ssafy.greenEarth.dto.Mission.MissionLogResDto;
import com.ssafy.greenEarth.dto.Mission.MissionPutDto;
import com.ssafy.greenEarth.dto.Mission.MissionReqDto;
import com.ssafy.greenEarth.dto.Mission.MissionResDto;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.MissionRepository;
import com.ssafy.greenEarth.service.MissionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("mission")
public class MissionController {

    private final MissionService missionService;

    // 오늘의 미션생성
    @PostMapping("/child/{child_id}")
    public ResponseEntity<MissionLogResDto> todayMissionCreate(@PathVariable("child_id") int childId, @RequestBody MissionReqDto missionReqDto,
                                                               HttpServletRequest request){

        int curUserId = (int) request.getAttribute("curUserId");
        Role curUserRole = (Role) request.getAttribute("curUserRole");
        log.info("현재 로그인한 유저 {}", curUserId);
        log.info("Role {}",curUserRole);
        MissionLogResDto data = missionService.saveTodayMission(childId, missionReqDto, curUserId);

        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }

    // 미션 전체 조회
    @GetMapping("")
    public ResponseEntity<List<Mission>> getAllMissions(){
        List<Mission> data = missionService.getAllMissions();
        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 미션 상세 조회
    @GetMapping("{mission_id}")
    public ResponseEntity<MissionResDto> getMissionDetail(@PathVariable("mission_id") int missionId){
        MissionResDto data = missionService.getMissionDetail(missionId);

        return new ResponseEntity<>(data,HttpStatus.OK);
    }

    // 아이 미션 로그 조회
    @GetMapping("/child/{child_id}/log")
    public ResponseEntity<List<MissionLogResDto>>  getMissionLogs(@PathVariable("child_id") int childId){
        List<MissionLogResDto> data = missionService.getMissionLogs(childId);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 오늘의 미션 조회
    @GetMapping("/child/{child_id}/today")
    public ResponseEntity<List<MissionLogResDto>> getTodayMissionLogs(@PathVariable("child_id") int childId){
        List<MissionLogResDto> data = missionService.getTodayMissionLogs(childId);

        return new ResponseEntity<>(data, HttpStatus.OK);
    }

    // 오늘의 미션 승인
    @PutMapping("log/{log_id}/permit")
    public ResponseEntity<MissionLogResDto> permitTodayMission(@PathVariable("log_id") int logId){
        MissionLogResDto data = missionService.permitMission(logId);
//        System.out.println(data);
        return new ResponseEntity<>(data, HttpStatus.OK);

    }

    // 오늘의 미션 거절
    @PutMapping("log/{log_id}/reject")
    public ResponseEntity<MissionLogResDto> rejectTodayMission(@PathVariable("log_id") int logId){
        MissionLogResDto data = missionService.rejectMission(logId);
//        System.out.println(data);
        return new ResponseEntity<>(data, HttpStatus.OK);

    }

    // 오늘의 미션 완료
    @PutMapping("log/{log_id}/clear")
    public ResponseEntity<MissionLogResDto> clearTodayMission(@PathVariable("log_id") int logId){
        MissionLogResDto data = missionService.clearMission(logId);
        return new ResponseEntity<>(data, HttpStatus.OK);

    }

    // 오늘의 미션 수정
    @PutMapping("/log/{log_id}")
    public ResponseEntity<MissionLogResDto> putTodayMission(@PathVariable("log_id") int logId, @RequestBody MissionPutDto missionPutDto ){
        MissionLogResDto data = missionService.updateTodayMission(logId, missionPutDto);
        return new ResponseEntity<>(data, HttpStatus.OK);
    }


    // 오늘의 미션 삭제
    @DeleteMapping("/log/{log_id}")
    public void deleteTodayMission(@PathVariable("log_id") int logId) {
        missionService.deleteTodayMission(logId);
    }
}
