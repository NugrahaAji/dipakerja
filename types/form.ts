// ─── Step 1 ──────────────────────────────────────────────────────────────────
export type ReporterType = 'Perorangan' | 'Perusahaan' | null;

// ─── Step 2 ──────────────────────────────────────────────────────────────────
export type Gender = 'Laki-laki' | 'Perempuan';

export interface ReporterIdentity {
  namaLengkap: string;
  jenisKelamin: Gender | '';
  nik: string;
  email: string;
  asalInstansi: string;
  consent: boolean;
}

// ─── Step 3 ──────────────────────────────────────────────────────────────────
export type ReporterRole = 'Pelapor' | 'Korban';
export type JenisPengaduan = 'KK' | 'PAK' | '';
export type K3Performance = 'Baik' | 'Buruk' | '';

export interface VictimIdentity {
  namaLengkap: string;
  jenisKelamin: Gender | '';
  nik: string;
  email: string;
  asalInstansi: string;
  uploadedFile: File | null;
}

export interface IncidentInfo {
  tanggalKejadian: string;
  waktuKejadian: string;
  jenisPengaduan: JenisPengaduan;
  deskripsiKejadian: string;
  lokasiKejadian: string;
  pelaksanaanK3: K3Performance;
  keterangan: string;
}

// ─── Root Form State ─────────────────────────────────────────────────────────
export interface FormState {
  // Step 1
  reporterType: ReporterType;

  // Step 2
  reporterIdentity: ReporterIdentity;

  // Step 3
  reporterRole: ReporterRole;
  victimIdentity: VictimIdentity;
  incidentInfo: IncidentInfo;
}
