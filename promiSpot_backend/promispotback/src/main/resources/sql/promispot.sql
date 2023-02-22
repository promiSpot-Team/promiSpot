

DROP TABLE IF EXISTS `members`;

CREATE TABLE `members` (
                           `member_seq`	BIGINT	NOT NULL AUTO_INCREMENT,
                           `member_id`	VARCHAR(20)	,
                           `member_pass`	VARCHAR(20),
                           `member_name`	VARCHAR(20),
                           `member_nick`	VARCHAR(20),
                           `member_email`	VARCHAR(100),
                           `member_phone_num`	VARCHAR(50),
                           `member_img_path`	VARCHAR(200),
                           `member_img_origin_name`	VARCHAR(200),
                           `member_img_server_name`	VARCHAR(200),
                           `member_address_is_agree`	TINYINT	NULL COMMENT '0:비동의 1:동의',
                           `member_token`    VARCHAR(1000)    NULL    COMMENT 'JWT',
                           primary key(`member_seq`)
);


DROP TABLE IF EXISTS `places`;

CREATE TABLE `places` (
                          `place_id`	VARCHAR(20) comment '카카오API 숫자 제공',
                          `place_name`	VARCHAR(30),
                          `place_category_name`	VARCHAR(200),
                          `place_category_group_code`	VARCHAR(100),
                          `place_category_group_name`	VARCHAR(100),
                          `place_phone`	VARCHAR(20),
                          `place_road_address_name`	VARCHAR(200),
                          `place_address_name`	VARCHAR(200),
                          `place_x`	VARCHAR(20),
                          `place_y`	VARCHAR(20),
                          `place_url`	VARCHAR(200),
                          `place_img_url`	VARCHAR(200) COMMENT '이미지 주소',
                          primary key(`place_id`)
);


DROP TABLE IF EXISTS `friend_request`;

CREATE TABLE `friend_request` (
                                  `friend_request_seq`	BIGINT	NOT NULL AUTO_INCREMENT,
                                  `member_seq`	BIGINT	NOT NULL 			COMMENT '신청 한 사람(사용자)',
                                  `friend_request_member`	BIGINT	NULL		COMMENT '신청 받은 사람(친구)',
                                  `friend_request_is_agree`	TINYINT	NULL	COMMENT '0 : 신청 상태, 1: 승인 상태',
                                  primary key (friend_request_seq)
);


DROP TABLE IF EXISTS `friends`;

CREATE TABLE `friends` (
                           `member_seq`	BIGINT	,
                           `friend_friend`	BIGINT	,
                           primary key(`member_seq`, `friend_friend`)
);


DROP TABLE IF EXISTS `promises`;

CREATE TABLE `promises` (
                            `promise_seq`	BIGINT	NOT NULL AUTO_INCREMENT,
                            `promise_title`	VARCHAR(30)	NULL,
                            `promise_leader` BIGINT,
                            `promise_date`	VARCHAR(20)	NULL,
                            `promise_time`	VARCHAR(20)	NULL,
                            `promise_day`	VARCHAR(20)	NULL,
                            `promise_vote_is_finish`	TINYINT	NULL	COMMENT '0:진헹중,1:완료/약속장이 투표종료누름',
                            `promise_schedule_is_finish`	TINYINT	NULL	COMMENT '0:진헹중,1:완료 / 해당 약속의 스케줄(로드맵) 생성 완료 여부',
                            primary key(`promise_seq`)
);


DROP TABLE IF EXISTS `promises_members`;

CREATE TABLE `promises_members` (
                                    `promise_seq`	BIGINT	NOT NULL,
                                    `member_seq`	BIGINT	NOT NULL,
                                    `promise_member_is_leader`	TINYINT	NULL	COMMENT '0:멤버,1:약속장',
                                    primary key(promise_seq, member_seq)
);


DROP TABLE IF EXISTS `votes`;

CREATE TABLE `votes` (
                         `vote_seq`	BIGINT	NOT NULL AUTO_INCREMENT,
                         `promise_seq`	BIGINT	NOT NULL	 ,
                         `member_seq`	BIGINT	NOT NULL	 COMMENT '후보를 등록한 사람',
                         `place_id`	VARCHAR(20)	NOT NULL	 COMMENT '카카오API에서 숫자로 제공함',
                         `vote_cnt`	BIGINT	NULL COMMENT '득표수를 서비스단에서 정렬해서 등수를 보여줌',
                         primary key(vote_seq)
);


DROP TABLE IF EXISTS `voters_members`;

CREATE TABLE `voters_members` (
                                  `vote_seq`	BIGINT	NOT NULL	,
                                  `member_seq`	BIGINT	NOT NULL	 ,
                                  primary key(member_seq, vote_seq)
);


DROP TABLE IF EXISTS `addresses`;

CREATE TABLE `addresses` (
                             `address_seq`	BIGINT	NOT NULL	 AUTO_INCREMENT,
                             `member_seq`	BIGINT	NOT NULL	,
                             `address_address`	VARCHAR(200)	NULL,
                             `address_nick`	VARCHAR(20)	NULL	COMMENT '예)우리집, 회사',
                             `address_x`	VARCHAR(20)	NULL,
                             `address_y`	VARCHAR(20)	NULL,
                             `address_is_primary`	TINYINT	NULL	COMMENT '0:서브,1:메인',
                             primary key(address_seq)
);


DROP TABLE IF EXISTS `departure`;

CREATE TABLE `departure` (
                             `promise_seq`	BIGINT	NOT NULL,
                             `member_seq`	BIGINT	NOT NULL,
                             `member_name`	VARCHAR(20),
                             `departure_x`	VARCHAR(20)	NULL,
                             `departure_y`	VARCHAR(20)	NULL,
                             `member_img_path`	VARCHAR(200),
                             primary key(promise_seq, member_seq)
);


-- 친구 성립 트리거
DELIMITER $$
CREATE TRIGGER friend_trigger
    AFTER UPDATE
    ON friend_request FOR EACH ROW
BEGIN
    DECLARE member_seq bigint;
		DECLARE friend_friend bigint;

        SET member_seq = OLD.member_seq;
        SET friend_friend = OLD.friend_request_member;
    insert into friends values(member_seq, friend_friend), (friend_friend, member_seq);
END $$
DELIMITER ;

/* 더미 데이터 */

-- 회원 더미 데이터
insert into members values
                        (null, "admin", "1234", "운영자", "운영자", "admin@naver.com", "01012342222", "", "", "", 1, null),
                        (null, "member1", "1234", "김동언", "동언스", "member1@naver.com", "01050261111", "", "", "", 1, null),
                        (null, "member2", "1234", "김수형", "수형스", "member2@naver.com", "01054431111", "", "", "", 1, null),
                        (null, "member3", "1234", "이민정", "민정스", "member3@naver.com", "01042371111", "", "", "", 1, null),
                        (null, "member4", "1234", "최윤지", "윤지스", "member4@naver.com", "01075771111", "", "", "", 1, null),
                        (null, "consultant", "1234", "컨설턴트", "컨설턴트님", "consultant@naver.com", "01011111234", "", "", "", 1, null),
                        (null, "coach", "1234", "코치", "코치님", "coach@naver.com", "01050261111", "", "", "", 1, NULL);


-- 주소 더미 데이터
insert into addresses values
                          (null, 1, "서울시 강남구 강남역", "자취방", "127.027610", "37.498095", 1),
                          (null, 1, "서울시 강남구 역삼역", "멀티캠퍼스", "127.02777501083", "37.50124267032",  0),
                          (null, 1, "서울시 강남구 우장산역", "본가", "126.836117683731", "37.546244810291",  0);


-- 친구신청 더미데이터
insert into friend_request values
                               (null, 3, 2, 1),
                               (null, 4, 3, 1),
                               (null, 2, 4, 0);

-- 친구승인 더미데이터
insert into friends values
                        (3, 2),
                        (2, 3),
                        (4, 3),
                        (3, 4);

-- 약속 더미데이터
insert into promises values
                         (null, "아시아나와 약속", 1, "2023년 2월 12일", "01:00PM", "일요일", 0, 0),
                         (null, "오토에버와 모임", 1, "2023년 2월 14일", "02:00PM", "화요일", 1, 0),
                         (null, "구해조와 만남", 1, "2023년 2월 28일", "07:30PM", "화요일", 1, 1);

-- 약속참여자 더미데이터
insert into promises_members values
                                 (1, 1, 1),
                                 (1, 2, 0),
                                 (1, 3, 0),
                                 (2, 1, 0),
                                 (2, 2, 0),
                                 (2, 3, 0),
                                 (3, 1, 0),
                                 (3, 2, 0),
                                 (3, 3, 0);


-- 장소 더미데이터
insert into places values
                       (	"8664636",
                            "곰바위",
                            "음식점",
                            "FD6",
                            "음식점 > 한식 > 육류,고기 > 곱창,막창",
                            "02-511-0068",
                            "서울 강남구 영동대로115길 10",
                            "서울 강남구 삼성동 76-10",
                            "127.05880695418199",
                            "37.51486885062181",
                            "http://place.map.kakao.com/8664636",
                            "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fcfile%2F01062A037898C30DE3"
                       ),
                       (	"1770731230",
                            "팀호완 삼성점",
                            "음식점",
                            "FD6",
                            "음식점 > 중식",
                            "0507-1374-3082",
                            "서울 강남구 봉은사로86길 30",
                            "서울 강남구 삼성동 148-15",
                            "127.056847505366",
                            "37.5114270736423",
                            "http://place.map.kakao.com/1770731230",
                            "https://img1.kakaocdn.net/cthumb/local/R0x420/?fname=http%3A%2F%2Ft1.kakaocdn.net%2Ffiy_reboot%2Fplace%2FAE3736BDCD6F424A90EB6188FD0844B1"
                       );

-- 약속장소후보 더미데이터
insert into votes values
                      (null, 1, 1, 1, 0),
                      (null, 1, 2, 2, 0);


-- 투표자 더미데이터
insert into voters_members values
                               (1, 1),
                               (1, 2),
                               (2, 1);


-- 스케쥴 더미데이터
insert into schedules values
                          (null, 1, 1, 1, "01:00PM", 1),
                          (null, 1, 2, 2, "02:00PM", 1);




