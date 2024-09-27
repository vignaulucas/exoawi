export class User {
  public id: number | null;
  public email: string | null;

  constructor(
    id: number | null = null,
    public name: string,
    public firstName: string,
    public role: string,
    email: string | null = null,
    public tel: string = 'Not provided'
  ) {
    this.id = id ?? null;
    this.email = this.validateEmail(email) ? email : null;
  }

  private validateEmail(email: string | null): boolean {
    if (email === null) return true;
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  public clone(): User {
    return new User(
      this.id,
      this.name,
      this.firstName,
      this.role,
      this.email,
      this.tel
    );
  }
}
  