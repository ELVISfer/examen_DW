-- MySQL Script generated by MySQL Workbench
-- Sat May 20 03:51:44 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema examen
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `examen` ;

-- -----------------------------------------------------
-- Schema examen
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `examen` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `examen` ;

-- -----------------------------------------------------
-- Table `examen`.`restariante`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `examen`.`restariante` (
  `idRestariante` INT NOT NULL,
  `nombre_del_rest` VARCHAR(45) NOT NULL,
  `ubicacion` VARCHAR(45) NOT NULL,
  `Direccion` VARCHAR(45) NOT NULL,
  `Correo_Electronico` VARCHAR(45) NOT NULL,
  `Descripcion` VARCHAR(45) NOT NULL,
  `calificacion` INT NOT NULL,
  PRIMARY KEY (`idRestariante`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE UNIQUE INDEX `idRestariante_UNIQUE` ON `examen`.`restariante` (`idRestariante` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `examen`.`menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `examen`.`menu` (
  `idMenu` INT NOT NULL,
  `idRestariante` INT UNSIGNED NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  `Descripcion` VARCHAR(45) NOT NULL,
  `precio` INT NOT NULL,
  `restariante_idRestariante1` INT NOT NULL,
  PRIMARY KEY (`idMenu`, `restariante_idRestariante1`),
  CONSTRAINT `fk_menu_restariante2`
    FOREIGN KEY (`restariante_idRestariante1`)
    REFERENCES `examen`.`restariante` (`idRestariante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE UNIQUE INDEX `idMenu_UNIQUE` ON `examen`.`menu` (`idMenu` ASC) VISIBLE;

CREATE INDEX `fk_menu_restariante2_idx` ON `examen`.`menu` (`restariante_idRestariante1` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `examen`.`opiniones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `examen`.`opiniones` (
  `idopiniones` INT UNSIGNED NOT NULL,
  `idrestariante` INT NOT NULL,
  `nombre_cllente` VARCHAR(45) NOT NULL,
  `calificacion` INT NOT NULL,
  `comentario` VARCHAR(45) NOT NULL,
  `restariante_idRestariante` INT NOT NULL,
  PRIMARY KEY (`idopiniones`),
  CONSTRAINT `fk_opiniones_restariante1`
    FOREIGN KEY (`restariante_idRestariante`)
    REFERENCES `examen`.`restariante` (`idRestariante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `fk_opiniones_restariante1_idx` ON `examen`.`opiniones` (`restariante_idRestariante` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `examen`.`plato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `examen`.`plato` (
  `idplato` INT UNSIGNED NOT NULL,
  `idmenu` INT NOT NULL,
  `nombre_plato` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(20) NOT NULL,
  `precio` INT NOT NULL,
  `ingrediente` VARCHAR(45) NOT NULL,
  `menu_idMenu` INT NOT NULL,
  `menu_restariante_idRestariante1` INT NOT NULL,
  PRIMARY KEY (`idplato`, `menu_idMenu`, `menu_restariante_idRestariante1`),
  CONSTRAINT `fk_plato_menu1`
    FOREIGN KEY (`menu_idMenu` , `menu_restariante_idRestariante1`)
    REFERENCES `examen`.`menu` (`idMenu` , `restariante_idRestariante1`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE INDEX `fk_plato_menu1_idx` ON `examen`.`plato` (`menu_idMenu` ASC, `menu_restariante_idRestariante1` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `examen`.`reservaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `examen`.`reservaciones` (
  `idreservaciones` INT NOT NULL,
  `idrestariante` INT NOT NULL,
  `nombre_cliente` VARCHAR(45) NOT NULL,
  `numero_persona` INT NOT NULL,
  `fecha_horarios` DATETIME NOT NULL,
  `esatdo_reservar` VARCHAR(45) NOT NULL,
  `restariante_idRestariante1` INT NOT NULL,
  PRIMARY KEY (`idreservaciones`, `restariante_idRestariante1`),
  CONSTRAINT `fk_reservaciones_restariante1`
    FOREIGN KEY (`restariante_idRestariante1`)
    REFERENCES `examen`.`restariante` (`idRestariante`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE UNIQUE INDEX `idreservaciones_UNIQUE` ON `examen`.`reservaciones` (`idreservaciones` ASC) VISIBLE;

CREATE INDEX `fk_reservaciones_restariante1_idx` ON `examen`.`reservaciones` (`restariante_idRestariante1` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;