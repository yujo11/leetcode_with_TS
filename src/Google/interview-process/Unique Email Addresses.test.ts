/**
 * https://leetcode.com/explore/interview/card/google/67/sql-2/3044/
 *
 * 유니크한 이메일의 갯수를 확인
 * - 이메일은 @를 기준으로 {localName}@{domainName}으로 나뉨
 * - localName에서 .을 모두 제거해야 함.
 * - localName에서 +이후의 문자열은 제거해야 함
 */

const convertLocalName = (localName: string): string => {
  return localName.split('+')[0].replaceAll('.', '')
}

function numUniqueEmails(emails: string[]): number {
  const uniqueEmailSet = new Set<string>()

  for (const email of emails) {
    const [localName, domainName] = email.split('@')

    uniqueEmailSet.add(`${convertLocalName(localName)}@${domainName}`)
  }

  return uniqueEmailSet.size
}

describe('Unique Email Addresses', () => {
  it('should return the number of unique email addresses', () => {
    const emails = [
      'test.email+alex@leetcode.com',
      'test.e.mail+bob.cathy@leetcode.com',
      'testemail+david@lee.tcode.com',
    ]

    expect(numUniqueEmails(emails)).toBe(2)
  })

  it('should return the number of unique email addresses', () => {
    const emails = ['a@leetcode.com', 'b@leetcode.com', 'c@leetcode.com']

    expect(numUniqueEmails(emails)).toBe(3)
  })
})
