import { http } from "config/http"

export async function getBrightness() {
  try {
    const { data }: any = await http.get("/brightness")
    return { ok: true, brightness: data }
  } catch (err) {
    return { ok: false, error: err }
  }
}
