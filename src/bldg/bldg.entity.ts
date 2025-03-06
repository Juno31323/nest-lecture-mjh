import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ schema: 'mjh', name: 'bldg' })
export class Bldg {
    @PrimaryGeneratedColumn()
    bldg_id: number;    // 건물ID

    @Column({ type: 'integer', nullable: false })
    bldg_sn: number;    // 건물일련번호

    @Column({ type: 'integer', nullable: false })
    rds_sn: number;     // 도로일련번호

    @Column({ type: 'text', nullable: false })
    sig_cd: string;     // 시군구코드

    @Column({ type: 'text', nullable: false })
    emd_cd: string;     // 읍면동코드

    @Column({ type: 'text', nullable: true })
    lotno_addr: string; // 지번주소

    @Column({ type: 'text', nullable: true })
    road_nm_addr: string;   // 도로명주소

    @Column({ type: 'text', nullable: true })
    bldg_nm: string;    // 건물명

    @Column({ type: 'geometry', nullable: false })
    bldg_geom: string;  // 건물지오메트리

    @Column({ type: 'integer', nullable: true })
    gro_flo_co: number; // 지상층수

    @Column({ type: 'integer', nullable: true })
    und_flo_co: number; // 지하층수

    @Column({ type: 'text', nullable: false })
    bdtyp_cd: string;   // 건물용도코드

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    crt_dt: Date;       // 생성일시

    @UpdateDateColumn({ type: 'timestamptz', nullable: true })
    mdfcn_dt: Date;     // 수정일시

    @Column({ type: 'timestamptz', nullable: true, comment: '건물색 구별' })
    recent_poi_dtl_crt_dt: Date;   
}