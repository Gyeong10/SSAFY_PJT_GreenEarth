package com.ssafy.greenEarth.service;

import com.ssafy.greenEarth.domain.Child;
import com.ssafy.greenEarth.domain.Parent;
import com.ssafy.greenEarth.dto.Child.*;
import com.ssafy.greenEarth.repository.ChildRepository;
import com.ssafy.greenEarth.repository.ParentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ChildService {

    private final ChildRepository childRepository;

    private final ParentRepository parentRepository;

    public ChildProfileDto findChild(int childId) {
        // 아이 프로필 조회
        Child child = childRepository.findChildById(childId)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이 프로필을 찾을 수 없습니다."));
        return new ChildProfileDto(child);
    }

    @Transactional
    public Child registerChild(ChildRegisterDto childDto) {
        // 연결된 보호자 조회
        Parent parent = parentRepository.findById(1)
                .orElseThrow(() -> new IllegalArgumentException("연결될 보호자 계정을 찾을 수 없습니다."));
        // 등록
        return childRepository.save(childDto.toEntity(parent));
    }

    @Transactional
    public ChildProfileDto updateProfile(int childId, ChildUpdateDto childDto) {
        // 아이 프로필 조회
        Child child = childRepository.findChildById(childId)
                .orElseThrow(() -> new IllegalArgumentException("해당 아이 프로필을 찾을 수 없습니다."));
        // 아이 닉네임 수정
        child.setNickname(childDto.getNickname());
        return new ChildProfileDto(childRepository.save(child));
    }
}
