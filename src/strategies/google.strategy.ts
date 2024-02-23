import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import {
  GoogleCallbackParameters,
  Profile,
  Strategy,
  VerifyCallback,
} from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super(
      {
        clientID:
          '427746182853-mner43c7uv6dghn5ihd04ushbevroddf.apps.googleusercontent.com',
        clientSecret: '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',
        callbackURL: 'http://localhost:3001/auth/google-redirect',
        scope: ['email', 'profile', 'openid'],
      },
      async (
        accessToken: string,
        refreshToken: string,
        params: GoogleCallbackParameters,
        profile: Profile,
        done: VerifyCallback,
      ) => {
        const { expires_in, id_token } = params;
        const {
          id,
          name,
          emails,
          photos,
          _json: { email_verified },
        } = profile;
        const user = {
          providerAccountId: id,
          email: emails[0].value,
          email_verified,
          firstName: name.givenName,
          lastName: name.familyName,
          picture: photos[0].value,
          accessToken,
          refreshToken,
          id_token,
          expires_in,
        };
        done(null, user);
      },
    );
  }
}
