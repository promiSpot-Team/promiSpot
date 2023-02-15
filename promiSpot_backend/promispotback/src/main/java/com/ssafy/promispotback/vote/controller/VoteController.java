package com.ssafy.promispotback.vote.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.ssafy.promispotback.vote.model.entity.VotePlaceEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.promispotback.vote.model.entity.VoteEntity;
import com.ssafy.promispotback.vote.model.entity.VoteMemberEntity;
import com.ssafy.promispotback.vote.model.service.VoteService;



@RestController
@CrossOrigin
@RequestMapping("/vote")
public class VoteController {
	
	@Autowired
	VoteService voteService;
	
	
	//약속 장소 후보 등록
	@PostMapping("insert")
	public ResponseEntity<?> insertCandidatePlace(@RequestBody VoteEntity voteEntity) {
		Map<String, Object> resultMap = new HashMap<>();
		try {

			// 등록 여부 판단
			// 등록되어 있다면 등록되었다는 메시지를 돌려준다.
			if(voteService.checkVotePlace(voteEntity) != null) {
				System.out.println("중복 방지 잘 작동됨");
				return new ResponseEntity<String>("already exist", HttpStatus.OK);
			}


			int result = voteService.insertCandidatePlace(voteEntity);
			
			if(result != 0) {
				resultMap.put("message", "success");
				resultMap.put("voteSeq", voteEntity.getVoteSeq()); // 자동 생성된 pk 값 담아주기
				return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
			} else {
				resultMap.put("message", "fail");
				return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.ACCEPTED);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}	
	}
	
	
	
	
	
	//약속 장소 후보 가져오기
	@GetMapping("get/{voteSeq}")
	public ResponseEntity<?> getCandidatePlace(@PathVariable("voteSeq") int voteSeq) {
		try {
			VoteEntity candidatePlace = voteService.getCandidatePlace(voteSeq);
			
			if (candidatePlace != null) {
				System.out.println("success work");
				return new ResponseEntity<VoteEntity>(candidatePlace, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	
	
	
	//약속 장소 후보들 가져오기 - 하나의 약속에 속한 모든 장소 후보들
	@GetMapping("getList/{promiseSeq}")
	public ResponseEntity<?> getCandidatePlaceList(@PathVariable("promiseSeq") int promiseSeq) {
		try {
			
			List<VotePlaceEntity> candidatePlaceList = voteService.getCandidatePlaceList(promiseSeq);
			
			if (candidatePlaceList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<VotePlaceEntity>>(candidatePlaceList, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}





	
	//약속 장소 후보 수정(투표/투표취소)
	@PutMapping("modify/{voteSeq}/{memberSeq}")
	public ResponseEntity<?> modifyCandidatePlace(@PathVariable("voteSeq") int voteSeq, @PathVariable("memberSeq") int memberSeq) {
		
		try {

			int result = voteService.modifyCandidatePlace(voteSeq, memberSeq);

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
	
	
	

	
	
	//사용자가 한 약속에서 이 장소를 투표한 건지 아닌지 조회
	@GetMapping("isVoted/{memberSeq}/{voteSeq}")
	public ResponseEntity<?> getPromiseList(@PathVariable("memberSeq") int memberSeq, @PathVariable("voteSeq") int voteSeq) {
		try {
			
			int result = voteService.isVoted(memberSeq, voteSeq);
			
			if (result != 0) {
				System.out.println("success work");
				return new ResponseEntity<String>("1", HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("0", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}
	

	
	/////////// 동언이가 만든거 ////////




	// 약속 장소 후보 리스트를 가져오는 함수
	@GetMapping("getVotePlaceList/{promiseSeq}")
	public ResponseEntity<?> getVotePlaceList(@PathVariable("promiseSeq") int promiseSeq) {
		try {

			List<VotePlaceEntity> votePlaceList = voteService.getVotePlaceList(promiseSeq);

			if (votePlaceList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<VotePlaceEntity>>(votePlaceList, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}



	// 이 장소가 약속 장소 후보에 등록되어 있는지 아닌지 알려주는 함수
	@GetMapping("checkVote/{promiseSeq}/{placeId}")
	public ResponseEntity<?> checkVotePlace(@PathVariable("promiseSeq") int promiseSeq,
											  @PathVariable("placeId") String placeId) {
		try {
			VoteEntity voteEntity = new VoteEntity();
			voteEntity.setPromiseSeq(promiseSeq);
			voteEntity.setPlaceId(placeId);

			VoteEntity result = voteService.checkVotePlace(voteEntity);

			if (result != null) {
				System.out.println("success work");
				return new ResponseEntity<VoteEntity>(result, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}


	// 투표하면 투표자 등록,  투표수 + 1증가
	@PostMapping("member/insert")
	public ResponseEntity<?> insertVoter(@RequestBody VoteMemberEntity voteMemberEntity) {
		try {

			int result = voteService.insertVoter(voteMemberEntity);

			if(result != 0) {
				return new ResponseEntity<String>("success", HttpStatus.OK);
			} else {
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}

		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}

	// 투표해재하면 투표자 제거, 투표수 -1
	@DeleteMapping("member/remove/{memberSeq}/{voteSeq}")
	public ResponseEntity<?> removeVoter(@PathVariable("memberSeq") int memberSeq, @PathVariable("voteSeq") int voteSeq) {

		try {
			int result = voteService.removeVoter(memberSeq, voteSeq);

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

	// 장소에 투표한 사람 가져오기
	@GetMapping("member/getList/{voteSeq}")
	public ResponseEntity<?> getListVoter(@PathVariable("voteSeq") int voteSeq) {
		try {
			List<VoteMemberEntity> voterList = voteService.getVoterList(voteSeq);

			if (voterList != null) {
				System.out.println("success work");
				return new ResponseEntity<List<VoteMemberEntity>>(voterList, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}




	// 사용자가 이 장소를 투표했는지 여부를 확인
	@GetMapping("member/check/{voteSeq}/{memberSeq}")
	public ResponseEntity<?> checkVoteMember(@PathVariable("voteSeq") int voteSeq,
											 @PathVariable("memberSeq") int memberSeq) {
		try {

			VoteMemberEntity voteMemberEntity = new VoteMemberEntity();
			voteMemberEntity.setVoteSeq(voteSeq);
			voteMemberEntity.setMemberSeq(memberSeq);


			VoteMemberEntity result = voteService.checkVoteMember(voteMemberEntity);

			if (result != null) {
				System.out.println("success work");
				return new ResponseEntity<VoteMemberEntity>(result, HttpStatus.OK);
			} else {
				System.out.println("fail work");
				return new ResponseEntity<String>("fail", HttpStatus.ACCEPTED);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return exceptionHandling(e);
		}
	}



	//약속 장소 후보 삭제
	@DeleteMapping("delete/{voteSeq}")
	public ResponseEntity<?> removeCandidatePlace(@PathVariable("voteSeq") int voteSeq) {

		System.out.println("삭제 작동 확인");
		
		try {
			int result1 = voteService.removeCandidatePlace(voteSeq);
			int result2 = voteService.removeAllVoteMember(voteSeq);
			int result = result1 * result2;
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
