package com.ssafy.promispotback.exception;

public class UnAuthorizedException extends RuntimeException {
	
	private static final long serialVersionUID = -2238030302650813813L;
	
	public UnAuthorizedException() {
		super("계정 권한이 유효하지 않습니다. \n 다시 로그인 해주세요.");
	}

}//UnAuthorizedException
