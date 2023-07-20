{
  class User {
    githubTokern: string;
    jwtToken: string;
  }

  interface AuthStratagy {
    auth(user: User): boolean;
  }

  class Auth {
    constructor(private strategy: AuthStratagy) {}

    setStrategy(strategy: AuthStratagy) {
      this.strategy = strategy;
    }
    authUser(user: User): boolean {
      return this.strategy.auth(user);
    }
  }

  class JWTStategy implements AuthStratagy {
    auth(user: User): boolean {
      if (user.jwtToken) {
        return true;
      } else {
        return false;
      }
    }
  }
  class GithubStategy implements AuthStratagy {
    auth(user: User): boolean {
      if (user.githubTokern) {
        return true;
      } else {
        return false;
      }
    }
  }

  const user = new User();
  user.jwtToken = 'token';
  const auth = new Auth(new JWTStategy());
  console.log(auth.authUser(user));

  auth.setStrategy(new GithubStategy());

  console.log(auth.authUser(user));
}
