/* eslint-disable @typescript-eslint/no-magic-numbers */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js

const u = undefined;

const plural = (n: number): number => {
  if (n === 1) return 1;

  return 5;
};

export default [
  'es-CO',
  [['a. m.', 'p. m.'], u, u],
  u,
  [
    ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
    ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'],
  ],
  [
    ['d', 'l', 'm', 'm', 'j', 'v', 's'],
    ['dom.', 'lun.', 'mar.', 'mié.', 'jue.', 'vie.', 'sáb.'],
    ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
    ['DO', 'LU', 'MA', 'MI', 'JU', 'VI', 'SA'],
  ],
  [
    ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
  ],
  [
    ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
  ],
  [['a. C.', 'd. C.'], u, ['antes de Cristo', 'después de Cristo']],
  0,
  [6, 0],
  ['d/MM/yy', 'd/MM/y', 'd \'de\' MMMM \'de\' y', 'EEEE, d \'de\' MMMM \'de\' y'],
  ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
  ['{1}, {0}', u, '{1} \'a\' \'las\' {0}', u],
  [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
  ['#,##0.###', '#,##0 %', '¤ #,##0.00', '#E0'],
  'COP',
  '$',
  'peso colombiano',
  {
    AUD: [u, '$'],
    BRL: [u, 'R$'],
    CAD: [u, '$'],
    CNY: [u, '¥'],
    COP: ['$'],
    ESP: ['₧'],
    EUR: [u, '€'],
    FKP: [u, 'FK£'],
    GBP: [u, '£'],
    HKD: [u, '$'],
    ILS: [u, '₪'],
    INR: [u, '₹'],
    JPY: [u, '¥'],
    KRW: [u, '₩'],
    MXN: [u, '$'],
    NZD: [u, '$'],
    RON: [u, 'L'],
    SSP: [u, 'SD£'],
    SYP: [u, 'S£'],
    TWD: [u, 'NT$'],
    USD: ['US$', '$'],
    VEF: [u, 'BsF'],
    VND: [u, '₫'],
    XAF: [],
    XCD: [u, '$'],
    XOF: [],
  },
  'ltr',
  plural,
];
