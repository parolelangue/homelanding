class CookieHelper {
  getCookie(cname: string) {
    if (typeof document === 'undefined') return null;
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  setCookie(name: string, value: string, seconds: number) {
    if (typeof document === 'undefined') return null;
    const d = new Date();
    d.setTime(d.getTime() + seconds * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
  }
}

const cookieHelper = new CookieHelper();

export default cookieHelper;
