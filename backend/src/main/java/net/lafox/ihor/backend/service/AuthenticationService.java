package net.lafox.ihor.backend.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import net.lafox.ihor.backend.dto.SignInRequest;
import net.lafox.ihor.backend.dto.SignInResponse;
import net.lafox.ihor.backend.repository.AdminUserRepository;
import net.lafox.ihor.backend.security.AdminJwtTokenProvider;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class AuthenticationService {
    private final AuthenticationManager authenticationManager;
    private final AdminUserRepository adminRepository;
    private final AdminJwtTokenProvider tokenProvider;

    public SignInResponse login(SignInRequest request) {
        Authentication auth = getAuthenticate(request.getEmail(), request.getPassword());
        checkVerified(request.getEmail());
        SecurityContextHolder.getContext().setAuthentication(auth);
        return generateResponse(auth);
    }

    private Authentication getAuthenticate(String email, String password) {
        return authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(email, password));
    }

    private void checkVerified(String email) {
        if (!adminRepository.isVerified(email))
            throw new RuntimeException(email + " is not verified! Please, verify your email!");
    }

    private SignInResponse generateResponse(Authentication auth) {
        String jwt = tokenProvider.generateToken(auth);
        return new SignInResponse(jwt);
    }
}

