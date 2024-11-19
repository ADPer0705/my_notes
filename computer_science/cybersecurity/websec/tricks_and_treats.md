### Poison Null Byte (%00)
- it is a URL encoded representation of the character "\\0"
- the null character is a character terminator in C-based languages, including many systems using C-based logic for handling file paths 
	- When the server encounters a null character, it may interpret the string as ending right at that point and ignore the characters that follow

consider the example where the server is configured to allow only files with `.md` or `.pdf` extensions to be downloaded. However, by adding `%00` (encoded as `%2500` in URL encoding) before the file extension, you trick the server into thinking that the file ends right before `.md`—making the server consider it as having an acceptable extension.
For example:
- You want to download `package.json.bak`.
- The server rejects `.bak` files but allows `.md`.
- By appending `%2500.md` (which includes a Poison Null Byte followed by `.md`), the server reads this as `package.json%00.md`.
When interpreted, the string may be processed by the server as `package.json` due to the `\0` (null byte) and ignores everything after. The server sees a valid file with an acceptable extension (`.md`) and allows the download.

- **Encoding `%00` as `%2500`**
The reason for encoding `%00` as `%2500` is because `%00` itself is a special character in URL encoding. To pass `%00` through the URL, it has to be double-encoded, so `%` is encoded as `%25`. This way, `%2500.md` appears in the URL, and the server decodes `%2500` to `%00`, interpreting it as the Poison Null Byte.

---

