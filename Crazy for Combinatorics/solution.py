from math import comb


def Ch(n, r):
    try:
        return comb(n, r)
    except:
        return 0


def H(n, r):
    return Ch(n + r - 1, r)


def K(r):
    return H(7, r)


Z = 3202

A = 885
B = 198
C = 11
D = 3818
E = 261
F = 352
G = 901

answer = K(Z) - K(Z - A) - K(Z - B) - K(Z - C) - K(Z - D) - K(Z - E) - K(Z - F) - K(Z - G) + K(Z - A - B) + K(
    Z - A - C) + K(Z - A - D) + K(Z - A - E) + K(Z - A - F) + K(Z - A - G) + K(Z - B - C) + K(Z - B - D) + K(
    Z - B - E) + K(Z - B - F) + K(Z - B - G) + K(Z - C - D) + K(Z - C - E) + K(Z - C - F) + K(Z - C - G) + K(
    Z - D - E) + K(Z - D - F) + K(Z - D - G) + K(Z - E - F) + K(Z - E - G) + K(Z - F - G) - K(Z - A - B - C) - K(
    Z - A - B - D) - K(Z - A - B - E) - K(Z - A - B - F) - K(Z - A - B - G) - K(Z - A - C - D) - K(Z - A - C - E) - K(
    Z - A - C - F) - K(Z - A - C - G) - K(Z - A - D - E) - K(Z - A - D - F) - K(Z - A - D - G) - K(Z - A - E - F) - K(
    Z - A - E - G) - K(Z - A - F - G) - K(Z - B - C - D) - K(Z - B - C - E) - K(Z - B - C - F) - K(Z - B - C - G) - K(
    Z - B - D - E) - K(Z - B - D - F) - K(Z - B - D - G) - K(Z - B - E - F) - K(Z - B - E - G) - K(Z - B - F - G) - K(
    Z - C - D - E) - K(Z - C - D - F) - K(Z - C - D - G) - K(Z - C - E - F) - K(Z - C - E - G) - K(Z - C - F - G) - K(
    Z - D - E - F) - K(Z - D - E - G) - K(Z - D - F - G) - K(Z - E - F - G) + K(Z - A - B - C - D) + K(
    Z - A - B - C - E) + K(Z - A - B - C - F) + K(Z - A - B - C - G) + K(Z - A - B - D - E) + K(Z - A - B - D - F) + K(
    Z - A - B - D - G) + K(Z - A - B - E - F) + K(Z - A - B - E - G) + K(Z - A - B - F - G) + K(Z - A - C - D - E) + K(
    Z - A - C - D - F) + K(Z - A - C - D - G) + K(Z - A - C - E - F) + K(Z - A - C - E - G) + K(Z - A - C - F - G) + K(
    Z - A - D - E - F) + K(Z - A - D - E - G) + K(Z - A - D - F - G) + K(Z - A - E - F - G) + K(Z - B - C - D - E) + K(
    Z - B - C - D - F) + K(Z - B - C - D - G) + K(Z - B - C - E - F) + K(Z - B - C - E - G) + K(Z - B - C - F - G) + K(
    Z - B - D - E - F) + K(Z - B - D - E - G) + K(Z - B - D - F - G) + K(Z - B - E - F - G) + K(Z - C - D - E - F) + K(
    Z - C - D - E - G) + K(Z - C - D - F - G) + K(Z - C - E - F - G) + K(Z - D - E - F - G) - K(
    Z - A - B - C - D - E) - K(Z - A - B - C - D - F) - K(Z - A - B - C - D - G) - K(Z - A - B - C - E - F) - K(
    Z - A - B - C - E - G) - K(Z - A - B - C - F - G) - K(Z - A - B - D - E - F) - K(Z - A - B - D - E - G) - K(
    Z - A - B - D - F - G) - K(Z - A - B - E - F - G) - K(Z - A - C - D - E - F) - K(Z - A - C - D - E - G) - K(
    Z - A - C - D - F - G) - K(Z - A - C - E - F - G) - K(Z - A - D - E - F - G) - K(Z - B - C - D - E - F) - K(
    Z - B - C - D - E - G) - K(Z - B - C - D - F - G) - K(Z - B - C - E - F - G) - K(Z - B - D - E - F - G) - K(
    Z - C - D - E - F - G) + K(Z - A - B - C - D - E - F) + K(Z - A - B - C - D - E - G) + K(
    Z - A - B - C - D - F - G) + K(Z - A - B - C - E - F - G) + K(Z - A - B - D - E - F - G) + K(
    Z - A - C - D - E - F - G) + K(Z - B - C - D - E - F - G) - K(Z - A - B - C - D - E - F - G)


print(answer)
